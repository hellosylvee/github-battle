var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');

// class SelectLanguage extends React.Component {
//     render() {
//         var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

//         return(
//             <ul className='languages'>
//                 {languages.map(function(lang){ 
//                     return (
//                         <li 
//                             style={lang === this.props.selectedLanguage ? { color: '#d0021b' } : null }
//                             key={lang} 
//                             onClick={this.props.onSelect.bind(null, lang)}>
//                             {lang}
//                         </li>
//                     )
//                 }, this)}
//             </ul>
//         )
//     }
// }

function SelectLanguage(props) {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return(
        <ul className='languages'>
            {languages.map(function(lang){ 
                return (
                    <li 
                        style={lang === props.selectedLanguage ? { color: '#d0021b' } : null }
                        key={lang} 
                        onClick={props.onSelect.bind(null, lang)}>
                        {lang}
                    </li>
                )
            }, this)}
        </ul>  
    )
}

SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All'
        };

        this.updateLanguage = this.updateLanguage.bind(this); //select specific component instance
    }

    componentDidMount() {
        //AJAX request
        this.updateLanguage(this.state.selectedLanguage)
    }

    updateLanguage(lang) {
        this.setState(function () {
            return {
                selectedLanguage: lang, 
                repos: null
            }
        })

        api.fetchPopularRepos(this.state.selectedLanguage)
            .then(function (repos) {
                this.setState(function() {
                    return {
                        repos: repos
                    }
                })
            }.bind(this));
    }

    render() {        
        return (
            <div>
                <SelectLanguage 
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect = {this.updateLanguage}
                    />
            </div>
        )
    }
}

module.exports = Popular;

//watch video - making ajax requests in react 11:20