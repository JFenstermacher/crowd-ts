type Attributes = {
  [key: string]: string
}

interface PaginatedRequest {
  expand?: boolean | string[]
  maxResults?: number
  startIndex?: number
}

declare module 'node-xml-stream'