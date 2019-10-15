
# truffledrizzle-kickstart  
### Built with [Truffle](https://www.trufflesuite.com/), [Drizzle](https://www.trufflesuite.com/drizzle) and [Ganache CLI](https://github.com/trufflesuite/ganache-cli).  
  
Docker  Chapter
-  
There are two docker services in `docker-compose`:  
  
- **ganache-cli** (located at /ganache/..):  
  - Build on top of the official ganache image `trufflesuite/ganache-cli:latest`   
- Modified `ENTRYPOINT` to run script `ganache_with_accounts.sh`, so that everytime ganache restarts, the same Ethereum accounts will be created (*bonus: they have 100 ETH each so you don't have to worry about faucets, fees and such*)  
  
- **truffle-drizzle** (located at /truffledrizzle/..)  
  - Build on top of `node:10`  
  - During the initialization stage, truffle will be installed as a global dependency and the following will be performed:  
      - Install all relevant NPM dependencies  
      - Compile and migrate contracts to specified network  
      - Move contract files into React project  

*Note that since we created a volume for the React project, the project supports hot editing.*
      
#### A few more things worth to mention:  
  
- The project supports all truffle commands such as `truffle migrate`, etc. in case you want to (re)run a command yourself.
- The frontend part is based on React; you can see all the available commands in the corresponding `package.json` file inside `truffledrizzle` folder 

React  
-  
You may find an as simple, comprehensive and self-explanatory structure as possible within `truffledrizzle` folder.  
- `assets` visual goodies  
- `components` stateless components  
- `containers` stateful components  
- `store` actions, reducers, selectors and sagas  
  
What's missing  
-  
- [ ] Environment setups