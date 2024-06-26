class UserSubmissionsController < ApplicationController
    def create
        puts "WHITELISTED PARAMS: #{user_submission_params}"
        UserSubmission.create!(user_submission_params)
        redirect_to root_path
        # UserSubmission.create(params)
        # puts "PARAMS: #{params}"
    end

    def user_submission_params
      params.require(:user_submission).permit(:first_name, :last_name, :email, :website, :text, :job_role)
    end
end
