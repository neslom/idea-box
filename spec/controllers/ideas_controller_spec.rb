require 'rails_helper'

RSpec.describe IdeasController, type: :controller do
  before(:each) do
    Idea.create(id: 1, title: "yolo", body: "one time")
  end

  describe "#index" do
    it "returns all of the Ideas" do

      get :index, format: :json
      idea = JSON.parse(response.body).first

      expect(response.status).to eq(200)
      expect(idea["title"]).to eq("yolo")
      expect(idea["body"]).to eq("one time")
    end
  end

  describe "#update" do
    it "can update an idea" do
      idea = Idea.find(1)

      expect(idea.title).to eq("yolo")
      expect(idea.body).to eq("one time")

      put :update, format: :json, id: 1, idea: { title: "wat", body: "what the" }

      updated_idea = Idea.find(1)

      expect(updated_idea.title).to eq("wat")
      expect(updated_idea.body).to eq("what the")
    end
  end

  describe "#destroy" do
    it "deletes an idea" do
      expect do
        delete :destroy, format: :json, id: 1
      end.to change{Idea.count}.from(1).to(0)
    end
  end
end
