class StaticPagesController < ApplicationController

  def root
  end

  def favorites
  end

  def search
    details = Gems.search(params["search-term"]).first.with_indifferent_access

    if details["name"].downcase == params['search-term'].downcase
      @gem = details
    else
      @gem = nil
    end
    #binding.pry
    render :root
  end

end
