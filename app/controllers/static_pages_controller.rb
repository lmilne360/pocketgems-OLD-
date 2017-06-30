class StaticPagesController < ApplicationController

  def root
  end

  def favorites
  end

  def search
    details = Gems.search(params["search-term"])
    if details.first["name"] == params['search-term']
      @gem = details.first
    else
      @gem = nil
    end
    render :root
  end

end
