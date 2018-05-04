class V1::SignUpController < ApplicationController

	def create
		@user = User.new(email: params[:email], password: params[:password])
		if @user.save
			render json: id_email_as_json , status: :created
		else 
			render json: @user.errors.full_messages, status: :bad_request
		end
	end

	private def id_email_as_json
		@user.as_json(only: [:email, :id])
	end

end
