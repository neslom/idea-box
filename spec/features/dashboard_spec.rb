require 'rails_helper'

RSpec.describe "Dashboard" do
  it "exists" do
    visit "/"

    expect(current_path).to eq(ideas_path)
  end
end
