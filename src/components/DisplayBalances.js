import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

function DisplayBalances() {
  return (
    <Segment textAlign='center'>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance title='Income:' value='1,035.56' color='green' />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance title='Expenses:' value='7,535.56' color='red' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default DisplayBalances