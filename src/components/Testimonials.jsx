const Testimonials = () => {
    return (
      <section className=" flex p-9 bg-[pink] bg-opacity-20 mt-20 w-full">
          <div className="items-center w-2/4 ml-9">
              <h1 className="font-bold mt-5">Testimonials</h1>
              <h1 className="text-4xl font-bold mt-5">What Our</h1>
              <h1 className="text-4xl font-bold mt-5 text-[#d1485f]">Clients Are Saying</h1>
              <br />
              <q className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias voluptatem aspernatur minus? Earum, quia. Iusto rem error deserunt tempora neque perspiciatis ullam ipsam nulla eum tenetur dignissimos iste quos saepe illo perferendis, .</q>
          </div>
          <div className="w-2/4 ml-5">
              <div className="flex justify-arounded h-52 shadow-xl bg-[white] border-s-8 border-[hsl(347,72%,72%)] rounded-xl mt-16">
                  <div className="mt-7  ">
                  <img src="/assets/female1.jpg" className="w-20 rounded-full ml-4 " alt="" />
                  <div className="mt-5 ml-5  ">
                  <span className="font-bold ">Anna Stokes</span>
                  <p className="ml-5">Student</p>
                  </div>
                  </div>
                  <div className="m-5">
                  <h1 className="text-2xl font-bold leading-10">College Companion</h1>
                  <q className="text-gray-700">Navigation higher education  as an adult was made easy <br /> with Back2College.</q>
                  <br />
                  <br />
                  <div className="flex fill-[#facc15]">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABlElEQVRIS7WVPyhGYRTGv68kGST/siiTDOwoZTOYFIpSlEFRyGShKKuBGCQpkUgWAwuLmUXKwkBRBkUZGPyOzq3X6/vuPa/ud+rp/XOf8zzv/5vNFDiyBdbPhBqsM6Aq0Au+LIMLMehHcEdFRyg30jbYQ7BPRY8pu8Fnkol1Bl0IHYJiR1DM9tMykLWXZXFjl8ZAGgbtOnrZXDc+dJlO4kzcJWqC2AMqgYjVKqTui0eaL1RewQN40voz5RG4EpJrcEO7MWnKxu9iWOcbjNOxbBSIo8n9mAIrvoG0p8EsKPun0SN5i2A1ys91TCfUpCLQ5FbFt9y8fPdgTE1qjCaXKn7g8+Mu2hLkSaOB3Go5OX8izsB9GpJ85iHMhRiUQpZpNyQp6/dTys4QgzbIF0Zxob2BVnBt3YNRiGs5DH7ONiF3xo9BOratBpsQhxzyPfVhcK59HZTCqXc4Ii4mvyLfJt85yTLqGfDu5ZbQXgBy0oqAvEvVVoMziOVArnw0aj83arfobOSJaLYa5BML7rf+0YKFo4RvDDk+GSCe/pcAAAAASUVORK5CYII="/>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABlElEQVRIS7WVPyhGYRTGv68kGST/siiTDOwoZTOYFIpSlEFRyGShKKuBGCQpkUgWAwuLmUXKwkBRBkUZGPyOzq3X6/vuPa/ud+rp/XOf8zzv/5vNFDiyBdbPhBqsM6Aq0Au+LIMLMehHcEdFRyg30jbYQ7BPRY8pu8Fnkol1Bl0IHYJiR1DM9tMykLWXZXFjl8ZAGgbtOnrZXDc+dJlO4kzcJWqC2AMqgYjVKqTui0eaL1RewQN40voz5RG4EpJrcEO7MWnKxu9iWOcbjNOxbBSIo8n9mAIrvoG0p8EsKPun0SN5i2A1ys91TCfUpCLQ5FbFt9y8fPdgTE1qjCaXKn7g8+Mu2hLkSaOB3Go5OX8izsB9GpJ85iHMhRiUQpZpNyQp6/dTys4QgzbIF0Zxob2BVnBt3YNRiGs5DH7ONiF3xo9BOratBpsQhxzyPfVhcK59HZTCqXc4Ii4mvyLfJt85yTLqGfDu5ZbQXgBy0oqAvEvVVoMziOVArnw0aj83arfobOSJaLYa5BML7rf+0YKFo4RvDDk+GSCe/pcAAAAASUVORK5CYII="/>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABlElEQVRIS7WVPyhGYRTGv68kGST/siiTDOwoZTOYFIpSlEFRyGShKKuBGCQpkUgWAwuLmUXKwkBRBkUZGPyOzq3X6/vuPa/ud+rp/XOf8zzv/5vNFDiyBdbPhBqsM6Aq0Au+LIMLMehHcEdFRyg30jbYQ7BPRY8pu8Fnkol1Bl0IHYJiR1DM9tMykLWXZXFjl8ZAGgbtOnrZXDc+dJlO4kzcJWqC2AMqgYjVKqTui0eaL1RewQN40voz5RG4EpJrcEO7MWnKxu9iWOcbjNOxbBSIo8n9mAIrvoG0p8EsKPun0SN5i2A1ys91TCfUpCLQ5FbFt9y8fPdgTE1qjCaXKn7g8+Mu2hLkSaOB3Go5OX8izsB9GpJ85iHMhRiUQpZpNyQp6/dTys4QgzbIF0Zxob2BVnBt3YNRiGs5DH7ONiF3xo9BOratBpsQhxzyPfVhcK59HZTCqXc4Ii4mvyLfJt85yTLqGfDu5ZbQXgBy0oqAvEvVVoMziOVArnw0aj83arfobOSJaLYa5BML7rf+0YKFo4RvDDk+GSCe/pcAAAAASUVORK5CYII="/>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABlElEQVRIS7WVPyhGYRTGv68kGST/siiTDOwoZTOYFIpSlEFRyGShKKuBGCQpkUgWAwuLmUXKwkBRBkUZGPyOzq3X6/vuPa/ud+rp/XOf8zzv/5vNFDiyBdbPhBqsM6Aq0Au+LIMLMehHcEdFRyg30jbYQ7BPRY8pu8Fnkol1Bl0IHYJiR1DM9tMykLWXZXFjl8ZAGgbtOnrZXDc+dJlO4kzcJWqC2AMqgYjVKqTui0eaL1RewQN40voz5RG4EpJrcEO7MWnKxu9iWOcbjNOxbBSIo8n9mAIrvoG0p8EsKPun0SN5i2A1ys91TCfUpCLQ5FbFt9y8fPdgTE1qjCaXKn7g8+Mu2hLkSaOB3Go5OX8izsB9GpJ85iHMhRiUQpZpNyQp6/dTys4QgzbIF0Zxob2BVnBt3YNRiGs5DH7ONiF3xo9BOratBpsQhxzyPfVhcK59HZTCqXc4Ii4mvyLfJt85yTLqGfDu5ZbQXgBy0oqAvEvVVoMziOVArnw0aj83arfobOSJaLYa5BML7rf+0YKFo4RvDDk+GSCe/pcAAAAASUVORK5CYII="/>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABlElEQVRIS7WVPyhGYRTGv68kGST/siiTDOwoZTOYFIpSlEFRyGShKKuBGCQpkUgWAwuLmUXKwkBRBkUZGPyOzq3X6/vuPa/ud+rp/XOf8zzv/5vNFDiyBdbPhBqsM6Aq0Au+LIMLMehHcEdFRyg30jbYQ7BPRY8pu8Fnkol1Bl0IHYJiR1DM9tMykLWXZXFjl8ZAGgbtOnrZXDc+dJlO4kzcJWqC2AMqgYjVKqTui0eaL1RewQN40voz5RG4EpJrcEO7MWnKxu9iWOcbjNOxbBSIo8n9mAIrvoG0p8EsKPun0SN5i2A1ys91TCfUpCLQ5FbFt9y8fPdgTE1qjCaXKn7g8+Mu2hLkSaOB3Go5OX8izsB9GpJ85iHMhRiUQpZpNyQp6/dTys4QgzbIF0Zxob2BVnBt3YNRiGs5DH7ONiF3xo9BOratBpsQhxzyPfVhcK59HZTCqXc4Ii4mvyLfJt85yTLqGfDu5ZbQXgBy0oqAvEvVVoMziOVArnw0aj83arfobOSJaLYa5BML7rf+0YKFo4RvDDk+GSCe/pcAAAAASUVORK5CYII="/>
                  </div>
                  </div>
              </div>
          </div>
  
      </section>
    )
  }
  
  export default Testimonials