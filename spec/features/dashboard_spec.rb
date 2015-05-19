require 'rails_helper'

RSpec.describe "Dashboard" do
  let!(:idea_1) { Idea.create(title: 'yolo', body: 'live once') }
  let!(:idea_2) { Idea.create(title: 'yodo', body: 'die once too', quality: 1) }

  it "shows a list of ideas", js: true do
    visit "/"

    expect(current_path).to eq(root_path)
    click_link_or_button("See Ideas")
    expect(page).to have_content(idea_1.title)
    expect(page).to have_content(idea_1.body)
    expect(page).to have_content(idea_2.title)
    expect(page).to have_content(idea_2.body)
  end
end
