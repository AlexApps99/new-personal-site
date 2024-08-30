export type Metadata = {
  /// Title of the blog post
  title: string;
  /// Short description
  description: string;
  /// URL stem, e.g. foo-bar-123
  url: string;
  /// YYYY-MM-DD
  date: string;
  /// Tags for the blog post
  tags?: Tag[];
  /// Whether the blog post is hidden from the index
  hidden?: boolean;
};

/// The metadata for each blog post
export type Tag = never;
