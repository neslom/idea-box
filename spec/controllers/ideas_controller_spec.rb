require 'rails_helper'

RSpec.describe IdeasController, type: :controller do
  let!(:idea) { Idea.create(title: "yolo", body: "one time") }

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
      original_idea = Idea.find(idea.id)

      expect(original_idea.title).to eq("yolo")
      expect(original_idea.body).to eq("one time")

      put :update, format: :json, id: original_idea.id, idea: { title: "wat", body: "what the" }

      updated_idea = Idea.find(original_idea.id)

      expect(updated_idea.title).to eq("wat")
      expect(updated_idea.body).to eq("what the")
    end
  end

  describe "#destroy" do
    it "deletes an idea" do
      expect do
        delete :destroy, format: :json, id: idea.id
      end.to change{Idea.count}.from(1).to(0)

     expect(response.status).to eq(204)
    end
  end

  describe "#create" do
    it "creates a new idea" do
      expect do
        post :create, format: :json, idea: { title: "markus", body: "is the man" }
      end.to change{Idea.count}.from(1).to(2)

      expect(response.status).to eq(201)
    end
  end
end
