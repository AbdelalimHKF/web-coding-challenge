class CreateShops < ActiveRecord::Migration[5.1]
  def change
    create_table :shops do |t|
      t.string :name
      t.string :picture
      t.string :email
      t.string :city
      
      t.timestamps
    end
  end
end
