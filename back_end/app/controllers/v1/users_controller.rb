class V1::UsersController < ApplicationController

	def create
		@user = User.new(email: params[:email], password: params[:password])
		if @user.save
			render json: id_email_as_json , status: :created
		else 
			head(:unprocessable_entity)
			#render json: @user.errors.full_messages
			#render json: @user
		end
	end

	#restrict access

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
end
