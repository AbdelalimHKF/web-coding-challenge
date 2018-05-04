class V1::UsersController < ApplicationController

	include ActionController::HttpAuthentication::Token::ControllerMethods

	
	before_action :restricte_access

	def index
		@users = User.all
		render json: @users.as_json(only: [:email, :id]) , status: :ok
	end

	def show
		if @user = User.where(id: params[:id]).first
		 	render json: id_email_as_json  , status: :ok
		else
			head(:not_found)
		end
	end


	def update
		@user = User.where(id: params[:id]).first
		if @user.update(email: params[:email], password: params[:password])
			render json: id_email_as_json , status: :ok
		else
			head(:unprocessable_entity)
		end
		
	end
		
	def destroy
		@user = User.where(id: params[:id]).first
		if @user.destroy
			head(:ok)
		else
			head(:unprocessable_entity)
		end
	end

	private def id_email_as_json
		@user.as_json(only: [:email, :id])
	end

	private def restricte_access
		authenticated = User.where(authentication_token: params[:authentication_token]).first
		head(:unauthorized) unless authenticated
	end
end
