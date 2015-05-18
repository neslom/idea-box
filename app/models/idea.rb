class Idea < ActiveRecord::Base
  validates :title, :body, presence: true

  enum quality: %w(swill plausible genius)
end
