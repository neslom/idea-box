require 'rails_helper'

RSpec.describe IdeasController, type: :controller do
  describe "#index" do
    it "returns all of the Ideas" do
      idea = Idea.create(title: "yolo", body: "one time")

      get :index, format: :json

      expect(response.status).to eq(200)
      expect(response.body).to have_content(idea.title)
      expect(response.body).to have_content(idea.body)
    end
  end
end
