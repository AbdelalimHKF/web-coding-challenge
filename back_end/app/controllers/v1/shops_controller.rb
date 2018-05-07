class V1::ShopsController < ApplicationController

	include ActionController::HttpAuthentication::Token::ControllerMethods

	before_action :restricte_access

	 def nearby_shops
		@shops = Array.new(Shop.within(params[:longitude], params[:latitude],params[:distance]))
				#Array.new(Shop.within(-6.80604, 33.94889 , 10000))		
		
		@shops.delete_if {|shop| liked_shops.include?(shop) }
		@shops.delete_if {|shop| won_t_be_displayed?(shop) }

		if @shops
		 	render json: @shops, status: :ok
		else
			head(:no_content)
		end
	end

	def preferred_shops

		if @shops = liked_shops
			render json: @shops , status: :ok
		else
			head(:no_content)
		end
	end

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

	def remove
    	@like = Like.where(user: User.find(params[:user_id]), shop: Shop.find(params[:shop_id])).first
		if @like.delete
			head(:ok)
		else
			head(:unprocessable_entity)
		end
  	end


	private def liked_shops
		shops=[]
		likes = User.where(id: params[:user_id]).first.likes
		for i in 0..likes.size-1
   			shops[i] = likes[i].shop
		end
		return shops
	end

	private def won_t_be_displayed?(shop)
		dislikes = User.where(id: params[:user_id]).first.dislikes
		if dislike = dislikes.where(shop_id: shop.id).first 
		 	if Time.new - dislike.created_at < 60*60*2 
			return true
			else
				dislike.delete
				return false
			end
		end 
		return false
	end

	private def restricte_access
		authenticated = User.where(authentication_token: params[:authentication_token]).first
		head(:unauthorized) unless authenticated
	end

end
