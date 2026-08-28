export interface SermonData {
  nextPageToken?: string;
  items: Sermon[];
  totalResults: number;
  size: number;
}

export interface Sermon {
  title: string;
  date: string;
  videoId: string;
  description?: string;
}

export interface YtPlaylist {
  nextPageToken?: string;
  items: YtPlaylistItem[];
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}

export interface YtPlaylistItem {
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    channelTitle: string;
    playlistId: string;
    position: number;
  };
  contentDetails: {
    videoId: string;
    videoPublishedAt: string;
  };
}

