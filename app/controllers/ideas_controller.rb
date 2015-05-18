class IdeasController < ApplicationController
  respond_to :json, :html

  def index
    respond_with Idea.all
  end
end
