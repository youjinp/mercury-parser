import {
  STRONG_TITLE_META_TAGS,
  WEAK_TITLE_META_TAGS,
  STRONG_TITLE_SELECTORS,
  WEAK_TITLE_SELECTORS
} from './constants'
import { cleanTitle } from './utils'
import {
  extractFromMeta,
  extractFromSelectors
} from '../utils'

const GenericTitleExtractor = {
  extract($, cachedMeta) {
    // First, check to see if we have a matching meta tag that we can make
    // use of that is strongly associated with the headline.
    let title

    title = extractFromMeta($, STRONG_TITLE_META_TAGS, cachedMeta)
    if (title) return cleanTitle(title)

    // Second, look through our content selectors for the most likely
    // article title that is strongly associated with the headline.
    title = extractFromSelectors($, STRONG_TITLE_SELECTORS)
    if (title) return cleanTitle(title)

    // Third, check for weaker meta tags that may match.
    title = extractFromMeta($, WEAK_TITLE_META_TAGS, cachedMeta)
    if (title) return cleanTitle(title)

    // Last, look for weaker selector tags that may match.
    title = extractFromSelectors($, WEAK_TITLE_SELECTORS)
    if (title) return cleanTitle(title)

    // If no matches, return an empty string
    return ""
  }
}

export default GenericTitleExtractor
