export interface SermonData {
  nextPageToken?: string;
  prevPageToken?: string;
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
  prevPageToken?: string;
  items: YtPlaylistItem[];
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}

export interface YtPlaylistItem {
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    channelTitle: string;
    playlistId: string;
    position: number;
    resourceId: {
      kind: string;
      videoId: string;
    };
  };
  id: {
    videoId: string;
  };
}

