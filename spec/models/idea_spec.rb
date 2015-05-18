require 'rails_helper'

RSpec.describe "Idea" do
  it "exists with a deafult quality of swill" do
    idea = Idea.new

    expect(idea.quality).to eq('swill')
  end
end
