require 'rails_helper'

RSpec.describe "Idea" do
  it "is invalid without title and body" do
    idea = Idea.create(title: nil, body: nil)
    idea_1 = Idea.create(title: 'hey', body: nil)
    idea_2 = Idea.create(title: nil, body: 'hey')

    expect(idea).to_not be_valid
    expect(idea_1).to_not be_valid
    expect(idea_2).to_not be_valid
  end

  it "is valid with title and body" do
    idea = Idea.create(title: 'test', body: 'so fun')

    expect(idea).to be_valid
  end

  it "exists with a default quality of swill" do
    idea = Idea.new

    expect(idea.quality).to eq('swill')
  end

  it "can have its quality incremented" do
    idea = Idea.create(title: "test", body: "so fun")
    idea.upvote

    expect(idea.quality).to eq("plausible")

    idea.upvote

    expect(idea.quality).to eq("genius")

    idea.upvote

    expect(idea.quality).to eq("genius")
  end
end
