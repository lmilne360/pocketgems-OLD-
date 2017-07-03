class StaticPagesController < ApplicationController

  def root
  end

  def favorites
  end

  def search
    details = Gems.search(params["search-term"]).first.try(:with_indifferent_access)
    if details && details["name"].downcase == params['search-term'].downcase
      @gem = GemService.new(details).create_gem
    else
      @error = "Oh no! Looks like that gem can't be found."
    end

    render :root
  end

end
