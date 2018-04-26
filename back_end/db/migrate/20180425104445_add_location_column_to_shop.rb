class AddLocationColumnToShop < ActiveRecord::Migration[5.1]
  def change
    add_column :shops, :location, :st_point, geographic: true
  end
end
