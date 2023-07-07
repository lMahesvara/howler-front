import Link from 'next/link'
import { Icons } from './Icons'
import RoundedButtonLayout from './RoundedButtonLayout'

const SearchBar = () => {
  return (
    <section>
      <div className='flex flex-wrap flex-1 '>
        <form action="" className='flex items-center md:flex'>
          <div class="relative">
            <input type="search" name="search" id="search" class="w-full h-7 mb-4 pl-5 text-sm text-white border border-neutral-700 rounded-lg bg-neutral-700 dark:bg-neutral-700  placeholder-slate-200 placeholder-text-sm" placeholder="Buscar. . ."/>
            <button type="submit" class="text-white absolute right-1  bottom-3 focus:outline-none font-medium rounded-lg text-sm py-1.5"><Icons.Search className='bg-neutral-700 rounded-lg'/></button>
          </div>
        </form>
      </div>
    
    </section>

    
  )
}

export default SearchBar 
