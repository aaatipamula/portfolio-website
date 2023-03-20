import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-github.tsx"
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-linkedin.tsx"

export default function Footer() {
    return (
        <div class="mt-20 p-6">
           <div class="flex space-x-4 justify-center">
            <a href="https://github.com/aaatipamula/"><IconBrandGithub class="text-theme-dark-pink w-7 h-7"/></a>
            <a href="https://www.linkedin.com/in/aniketh-aatipamula-a0a120150/"><IconBrandLinkedin class="text-theme-dark-pink w-7 h-7"/></a>           
           </div>
           <div class="text-theme-medium-grey text-center mt-3">Designed and Built by Aniketh Aatipamula</div>
        </div>
    )
}