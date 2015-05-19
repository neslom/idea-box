class IdeasController < ApplicationController
  respond_to :json, :html

  def index
    respond_with Idea.all
    #respond_with Idea.order('created_at DESC').all
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

  private

  def idea_params
    params.require(:idea).permit(:title, :body, :quality)
  end
end
