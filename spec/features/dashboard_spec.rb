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

  it "can have a new idea created", js: true do
    visit "/"

    click_link_or_button("New Idea")
    within(".ideaInput") do
      fill_in("title", with: "NEW title")
      fill_in("body", with: "NEW body")
    end

    expect do
      click_link_or_button("Save Idea")
    end.to change{Idea.count}.from(2).to(3)
  end

  it "can delete an idea", js: true do
    visit "/"
    click_link_or_button("See Ideas")

    expect do
      first("#deleteIdea").click
    end.to change{Idea.count}.from(2).to(1)
  end

  xit "can upvote an idea", js: true do
    idea = Idea.first

    expect(idea.quality).to eq("swill")

    visit "/"
    click_link_or_button("See Ideas")

    expect do
      first(".fa-thumbs-up").click
      save_and_open_page
    end.to change{idea.quality}.from("swill").to("plausible")
  end
end
