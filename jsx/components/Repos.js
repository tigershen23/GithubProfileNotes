var React = require("react-native")
var Badge = require("./Badge")
var Separator = require("./Helpers/Separator")

var {
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10
  },
  name: {
    color: '#48BBEC',
    fontSize: 18,
    paddingBottom: 5
  },
  stars: {
    color: '#48BBEC',
    fontSize: 14,
    paddingBottom: 5
  },
  description: {
    fontSize: 14,
    paddingBottom: 5
  }
});

class Repos extends React.Component {
  openPage(url) {
    console.log(url)
  }

  render() {
    var repos = this.props.repos
    var list = repos.map((repo, index) => {
      var description = repo.description ? <Text style={styles.description}>{repo.description}</Text> : <View />

      return (
        <View key={index}>
          <View style={styles.rowContainer}>
            <TouchableHighlight
              onPress={this.openPage.bind(this, repo.html_url)}
              underlayColor="transparent">
              <Text style={styles.name}>{repo.name}</Text>
            </TouchableHighlight>
            <Text style={styles.stars}> Stars: {repo.stargazers_count}</Text>
            {description}
          </View>
          <Separator />
        </View>
      )
    })
    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo} />
      </ScrollView>
    );
  }
}

Repos.propTypes = {
  userInfo: React.PropTypes.object.isRequired,
  repos: React.PropTypes.array.isRequired,
}

module.exports = Repos;
