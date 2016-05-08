class Game < ActiveRecord::Migration
  def change
  	create_table :games do |t|
  		t.integer  :score

  		t.timestamps null: false
  	end
  end
end
