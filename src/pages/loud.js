import { Component } from "react";
import axios from "axios";
import { Main, MainTitle, HeistGallery, HeistItem, HeistName, SearchStealth, RadioLabel, RadioBtn, ChooseType } from "../styles/main";
import { Link } from "react-router-dom";

class Loud extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstLoad: true,
            data: [],
            filteredData: [],
            textToMatch: '',
            category: "1",
        }
    }

    componentDidMount = () => {
        axios.get("loudable.json")
        .then(res => res.data)
        .then(resdata => this.setState({data: resdata}, () => this.setCategory()))
        .catch(err => console.log(err));  
    }

    filterHeists = (e) => this.setState({textToMatch: e.target.value.toLowerCase(), filteredData: [], firstLoad: false}, () => this.setCategory() );
    filterCategory = (e) => this.setState({category: e.currentTarget.value, filteredData: []}, () => this.setCategory());
    
    setCategory = () => {
        this.state.data.forEach(item => {
            const filtered = this.state.filteredData;

            if (this.state.category === "1") {
                if(item.name.toLowerCase().includes(this.state.textToMatch) && (item.category === "loud" || item.category === "both"))
                    filtered.push(item)} 
            else if (this.state.category === "2") {
                if(item.name.toLowerCase().includes(this.state.textToMatch) && (item.category === "loud" ))
                    filtered.push(item)}
            else if (this.state.category === "3") {
                if(item.name.toLowerCase().includes(this.state.textToMatch) && (item.category === "both"))
                    filtered.push(item)}

            this.setState({filteredData: filtered});
        }); 
    }

    render() {

        return(
            <Main>
                <MainTitle>Choose heist you want to scout</MainTitle>
                <SearchStealth id="search-form" onChange={this.filterHeists} onLoad={this.filterHeists} autoFocus />
                <ChooseType>
                    <RadioLabel>
                        <RadioBtn onChange={this.filterCategory} value="1" defaultChecked />
                        <div> <span></span> </div>
                        <span>All</span>
                    </RadioLabel>
                    <RadioLabel>
                        <RadioBtn onChange={this.filterCategory} value="2" />
                        <div> <span></span> </div>
                        <span>Loud only</span>
                    </RadioLabel>
                    <RadioLabel>
                        <RadioBtn onChange={this.filterCategory} value="3" />
                        <div> <span></span> </div>
                        <span>Loud but stealth-able</span>
                    </RadioLabel>
                </ChooseType>
                <HeistGallery>
                    { this.state.filteredData.map((heist) => <Heist key={heist.id} name={heist.name} subname={heist.subname} isLoud={heist.isLoud} img={heist.img} link={heist.link} category={heist.category} /> ) }
                </HeistGallery>
            </Main>
        );
    }
}

const Heist = ({name, subname, isLoud, img, link}) => {

    return(
        <HeistItem as={Link} to={link}>
            <img src={img} alt="Map from FBI Files" />
            <HeistName><p>{name}</p><p>{subname}</p><p>{isLoud}</p></HeistName>
        </HeistItem>
        
    );
}

export default Loud;