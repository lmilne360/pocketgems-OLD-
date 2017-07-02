class StaticPagesController < ApplicationController

  def root
  end

  def favorites
  end

  def search

    details = Gems.search(params["search-term"]).first.with_indifferent_access
    if details["name"].downcase == params['search-term'].downcase
      @gem = GemService.new(details).create_gem
    else
      @gem = nil
    end

    render :root
  end

end
