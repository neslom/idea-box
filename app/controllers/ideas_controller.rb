class IdeasController < ApplicationController
  respond_to :json, :html

  def index
    respond_with Idea.order('created_at DESC').all
  end

  def update
    respond_with Idea.update(params[:id], idea_params)
  end

  def destroy
    respond_with Idea.delete(params[:id])
  end

  def create
    respond_with Idea.create(idea_params)
  end

  def upvote
    idea = Idea.find_by(id: params[:id])
    idea.upvote
    respond_with idea.quality.to_json
  end

  private

  def idea_params
    params.require(:idea).permit(:title, :body, :quality)
  end
end
