class Shop < ApplicationRecord

	scope :within, -> (longitude,latitude, distance=1000) {
    where("ST_Distance(location, 'POINT(#{longitude} #{latitude})') < #{distance}")
    .order("ST_Distance(shops.location,
    					ST_GeomFromText('POINT (#{longitude} #{latitude})',#{4326}),#{true})") 
  	}
end
