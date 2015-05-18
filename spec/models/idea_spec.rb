require 'rails_helper'

RSpec.describe "Idea" do
  it "exists with a default quality of swill" do
    idea = Idea.new

    expect(idea.quality).to eq('swill')
  end

  it "is invalid without title and body" do
    idea = Idea.create(title: nil, body: nil)

    expect(idea).to_not be_valid
  end

  it "is valid with title and body" do
    idea = Idea.create(title: 'test', body: 'so fun')

    expect(idea).to be_valid
  end
end
