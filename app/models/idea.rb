class Idea < ActiveRecord::Base
  validates :title, :body, presence: true

  enum quality: %w(swill plausible genius)

  def upvote
    increment!(:quality) if Idea.qualities[self.quality] < 2
  end

  def downvote
    decrement!(:quality) if Idea.qualities[self.quality] > 0
  end
end
