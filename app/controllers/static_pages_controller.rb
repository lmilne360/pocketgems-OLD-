class StaticPagesController < ApplicationController

  def root
  end

  def favorites
  end

  def search
   
     result = Gems.search(params["search-term"]).select { |e| e['name'] == params['search-term'] }

     if result.blank?
        @error = "Oh no! Looks like that gem can't be found."
     else
        @gem = GemService.new(result[0]).create_gem
     end

    render :root
  end

end



