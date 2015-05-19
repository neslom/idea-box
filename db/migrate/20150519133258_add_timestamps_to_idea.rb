class AddTimestampsToIdea < ActiveRecord::Migration
  def change
    add_timestamps :ideas, null: false
  end
end
