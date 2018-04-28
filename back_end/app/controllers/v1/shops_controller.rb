class V1::ShopsController < ApplicationController

	def like
		if Like.create(user: User.find(params[:user_id]), shop: Shop.find(params[:shop_id]))
			head(:created)
		else
			head(:unprocessable_entity)
		end
	end

	def dislike
		if Dislike.create(user: User.find(params[:user_id]), shop: Shop.find(params[:shop_id]))
			head(:created)
		else
			head(:unprocessable_entity)
		end
	end
	
end
