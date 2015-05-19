class Seed
  def run
    create_ideas(5)
  end

  def create_ideas(quantity)
    quantity.times do
      title = Faker::Hacker.abbreviation
      body = Faker::Hacker.say_something_smart
      quality = [0, 1, 2].shuffle.first

      Idea.create(title: title, body: body, quality: quality)
    end
  end
end

Seed.new.run
