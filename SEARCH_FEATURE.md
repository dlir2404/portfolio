# Search Feature Documentation

## Overview

The portfolio now includes a powerful search feature that allows users to find blog posts and work projects using fuzzy search powered by Fuse.js.

## Features

- **Full-text search** across blog posts and projects
- **Fuzzy matching** - finds results even with typos
- **Real-time search** with instant results
- **Type filtering** - search only blogs, only projects, or both
- **Keyboard shortcuts** - `Cmd/Ctrl + K` to focus search, `Esc` to clear
- **Responsive design** with clean, accessible UI
- **Build-time data generation** for optimal performance

## Architecture

### 1. Data Generation (`src/scripts/generate-blog-data.ts`)
- Runs at build time via `npm run build`
- Processes all MDX files from blog posts and work projects
- Extracts metadata (title, summary, content, tags, etc.)
- Generates `public/search-data.json` for client-side consumption

### 2. Search Hook (`src/hooks/useSearch.ts`)
- Custom React hook that manages search state
- Integrates with Fuse.js for fuzzy search capabilities
- Handles loading, error states, and result filtering
- Configurable search options (threshold, max results, types)

### 3. Search Component (`src/components/search/Search.tsx`)
- Reusable search component with clean UI
- Keyboard shortcut support
- Real-time search with debouncing
- Customizable placeholder and result limits

### 4. Keyboard Shortcuts (`src/hooks/useKeyboardShortcuts.ts`)
- `Cmd/Ctrl + K` - Focus search input
- `Esc` - Clear search results

## Usage

### Basic Search Component
```tsx
import { Search } from '@/components';

// Search all content types
<Search placeholder="Search..." maxResults={10} />

// Search only blog posts
<Search types={['blog']} placeholder="Search blog posts..." />

// Search only projects
<Search types={['work']} placeholder="Search projects..." />
```

### Search Hook
```tsx
import { useSearch } from '@/hooks/useSearch';

function CustomSearchComponent() {
  const {
    query,
    results,
    isLoading,
    totalItems,
    handleSearchChange,
    clearSearch
  } = useSearch({
    maxResults: 20,
    types: ['blog', 'work'],
    threshold: 0.3
  });

  return (
    // Your custom search UI
  );
}
```

## Configuration

### Fuse.js Options
The search uses weighted scoring:
- **Title**: 40% weight
- **Summary**: 30% weight  
- **Content**: 20% weight
- **Tags**: 10% weight

### Search Threshold
- `0.0` = Perfect match only
- `0.3` = Default (good balance)
- `1.0` = Match anything

## File Structure

```
src/
├── components/
│   └── search/
│       ├── Search.tsx           # Main search component
│       └── Search.module.scss   # Styles
├── hooks/
│   ├── useSearch.ts            # Search logic hook
│   └── useKeyboardShortcuts.ts # Keyboard shortcuts
├── scripts/
│   └── generate-blog-data.ts   # Build-time data generation
└── app/
    └── search/
        └── page.tsx            # Dedicated search page
```

## Build Process

1. `npm run generate-search` - Generates search data
2. `npm run build` - Runs search generation + Next.js build
3. Search data is available at `/search-data.json`

## Performance

- Search data is generated at build time, not runtime
- Client-side search for instant results
- Fuzzy search handles typos gracefully
- Minimal bundle size impact (~10KB for Fuse.js)

## Browser Support

- Modern browsers with ES6+ support
- Keyboard shortcuts work in all major browsers
- Responsive design for mobile/tablet/desktop

## Future Enhancements

- [ ] Search result highlighting
- [ ] Search suggestions/autocomplete
- [ ] Recent searches storage
- [ ] Advanced filters (date, tags, etc.)
- [ ] Search analytics
