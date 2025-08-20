'use client';

import { useRef } from 'react';
import { 
  Button, 
  Column, 
  Input, 
  Text, 
  Grid,
  Card,
  Badge,
  Flex
} from '@/once-ui/components';
import { SearchablePost } from '@/scripts/generate-blog-data';
import { formatDate } from '@/app/utils/formatDate';
import { useSearch } from '@/hooks/useSearch';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';
import Link from 'next/link';
import styles from './Search.module.scss';

interface SearchProps {
  placeholder?: string;
  maxResults?: number;
  types?: ('blog' | 'work')[];
  className?: string;
  threshold?: number;
  autoFocus?: boolean;
}

export function Search({ 
  placeholder = "Search posts and projects...", 
  maxResults = 10,
  types = ['blog', 'work'],
  className,
  threshold = 0.3,
  autoFocus = false
}: SearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  
  const {
    query,
    results,
    isLoading,
    isDataLoaded,
    error,
    totalItems,
    handleSearchChange,
    clearSearch
  } = useSearch({ maxResults, types, threshold });

  // Keyboard shortcuts
  useKeyboardShortcuts({
    onSearch: () => inputRef.current?.focus(),
    onEscape: clearSearch
  });

  const enhancedPlaceholder = `${placeholder} (⌘K to focus)`;

  return (
    <Column gap="l" className={className}>
      <Flex fillWidth gap="s" align="center">
        <Input
          ref={inputRef}
          id="search"
          label=""
          placeholder={enhancedPlaceholder}
          value={query}
          onChange={(e) => handleSearchChange(e.target.value)}
          style={{ flex: 1 }}
          labelAsPlaceholder
          autoFocus={autoFocus}
        />
        {query && (
          <Button
            variant="tertiary"
            size="m"
            onClick={clearSearch}
          >
            Clear
          </Button>
        )}
      </Flex>

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
        <Column gap="m">
          {results.length > 0 ? (
            <>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Found {results.length} result{results.length !== 1 ? 's' : ''} {maxResults && results.length >= maxResults ? `(showing first ${maxResults})` : ''}
              </Text>
              <Grid columns="1" gap="m">
                {results.map((item) => (
                  <SearchResultCard key={item.id} item={item} />
                ))}
              </Grid>
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
    </Column>
  );
}

interface SearchResultCardProps {
  item: SearchablePost;
}

function SearchResultCard({ item }: SearchResultCardProps) {
  const href = item.type === 'blog' ? `/blog/${item.slug}` : `/work/${item.slug}`;
  
  return (
    <Card
      padding="l"
      border="neutral-weak"
      borderStyle="solid"
      background="surface"
      className={styles.searchResultCard}
    >
      <Link href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Column gap="s">
          <Flex gap="m" direction="row">
            <Column gap="xs" flex={1}>
              <Text variant="heading-strong-s" onBackground="neutral-strong">
                {item.title}
              </Text>
              <Text 
                variant="body-default-s" 
                onBackground="neutral-medium"
                className={styles.summary}
              >
                {item.summary}
              </Text>
            </Column>
            <Column gap="xs">
              <Badge title={item.type} />
              {item.tag && (
                <Badge title={item.tag} />
              )}
            </Column>
          </Flex>
          <Text variant="label-default-xs" onBackground="neutral-weak">
            {formatDate(item.publishedAt)}
          </Text>
        </Column>
      </Link>
    </Card>
  );
}
