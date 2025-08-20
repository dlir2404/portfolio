'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  Button, 
  Column, 
  Input, 
  Text, 
  Grid,
  Card,
  Badge,
  Flex,
  Icon
} from '@/once-ui/components';
import { SearchablePost } from '@/scripts/generate-blog-data';
import { formatDate } from '@/app/utils/formatDate';
import { useSearch } from '@/hooks/useSearch';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';
import Link from 'next/link';
import styles from './SearchModal.module.scss';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  
  const {
    query,
    results,
    isLoading,
    isDataLoaded,
    error,
    totalItems,
    handleSearchChange,
    clearSearch
  } = useSearch({ maxResults: 20, types: ['blog', 'work'], threshold: 0.3 });

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Close modal on escape
  useKeyboardShortcuts({
    onEscape: () => {
      if (isOpen) {
        clearSearch();
        onClose();
      }
    }
  });

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleClose = () => {
    clearSearch();
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal} ref={modalRef}>
        <div className={styles.modalContent}>
          <Column gap="m" fillWidth>
            {/* Header */}
            <Flex fillWidth align="center" gap="m">
              <Text variant="heading-strong-m" onBackground="neutral-strong">Search</Text>
              <Button
                variant="tertiary"
                size="s"
                onClick={handleClose}
                style={{ marginLeft: 'auto' }}
              >
                <Icon name="close" size="s" />
              </Button>
            </Flex>

            {/* Search Input */}
            <Input
              ref={inputRef}
              id="search-modal"
              label=""
              placeholder="Search posts and projects... (Press Esc to close)"
              value={query}
              onChange={(e) => handleSearchChange(e.target.value)}
              labelAsPlaceholder
            />

            {/* Search Results */}
            <div className={styles.resultsContainer}>
            {/* Error state */}
            {error && (
              <Text variant="body-default-s" onBackground="neutral-medium">
                ⚠️ {error}
              </Text>
            )}

            {/* Loading state */}
            {isLoading && (
              <Text variant="body-default-s" onBackground="neutral-weak">
                🔍 Searching...
              </Text>
            )}

            {/* Search results */}
            {query.length >= 2 && !isLoading && !error && (
              <Column gap="s">
                {results.length > 0 ? (
                  <>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      Found {results.length} result{results.length !== 1 ? 's' : ''}
                    </Text>
                    <Column gap="xs">
                      {results.map((item) => (
                        <SearchResultCard 
                          key={item.id} 
                          item={item} 
                          onSelect={handleClose}
                        />
                      ))}
                    </Column>
                  </>
                ) : (
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    No results found for "{query}"
                  </Text>
                )}
              </Column>
            )}

            {/* Initial state when no search */}
            {!query && isDataLoaded && !error && (
              <Text variant="body-default-s" onBackground="neutral-weak">
                💡 Start typing to search through {totalItems} posts and projects
              </Text>
            )}

            {/* Loading initial data */}
            {!isDataLoaded && !error && (
              <Text variant="body-default-s" onBackground="neutral-weak">
                Loading search data...
              </Text>
            )}
          </div>
          </Column>
        </div>
      </div>
    </div>
  );
}

interface SearchResultCardProps {
  item: SearchablePost;
  onSelect: () => void;
}

function SearchResultCard({ item, onSelect }: SearchResultCardProps) {
  const href = item.type === 'blog' ? `/blog/${item.slug}` : `/work/${item.slug}`;
  
  // Get thumbnail image
  const getThumbnail = () => {
    if (item.type === 'blog') {
      return item.image || '/images/blogs/default-thumbnail.png';
    } else {
      return item.images?.[0] || '/images/projects/default-thumbnail.png';
    }
  };

  return (
    <Card
      padding="s"
      border="neutral-weak"
      borderStyle="solid"
      background="surface"
      className={styles.searchResultCard}
    >
      <Link href={href} style={{ textDecoration: 'none', color: 'inherit' }} onClick={onSelect}>
        <Flex gap="s">
          {/* Thumbnail */}
          <div className={styles.thumbnail}>
            {(item.image || item.images?.[0]) ? (
              <img 
                src={getThumbnail()} 
                alt={item.title}
                className={styles.thumbnailImage}
                onError={(e) => {
                  // Fallback to a simple colored div if image fails to load
                  e.currentTarget.style.display = 'none';
                }}
              />
            ) : (
              <div className={styles.thumbnailPlaceholder}>
                {item.type === 'blog' ? '📝' : '🚀'}
              </div>
            )}
          </div>
          
          {/* Content */}
          <Column gap="xs" flex={1}>
            <Flex gap="xs" align="center" wrap>
              <Text variant="body-strong-m" onBackground="neutral-strong">
                {item.title}
              </Text>
              <Flex gap="xs">
                <Badge 
                  title={item.type} 
                  background="neutral-weak"
                />
                {item.tag && (
                  <Badge 
                    title={item.tag} 
                    background="brand-weak"
                  />
                )}
              </Flex>
            </Flex>
            
            <Text 
              variant="body-default-s" 
              onBackground="neutral-medium"
              className={styles.summary}
            >
              {item.summary}
            </Text>
            
            <Text variant="label-default-xs" onBackground="neutral-weak">
              {formatDate(item.publishedAt)}
            </Text>
          </Column>
        </Flex>
      </Link>
    </Card>
  );
}
