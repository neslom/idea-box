require 'rails_helper'

RSpec.describe IdeasController, type: :controller do
  describe "#index" do
    it "returns all of the Ideas" do
      Idea.create(title: "yolo", body: "one time")

      get :index, format: :json
      idea = JSON.parse(response.body).first

      expect(response.status).to eq(200)
      expect(idea["title"]).to eq("yolo")
      expect(idea["body"]).to eq("one time")
    end
  end
end
