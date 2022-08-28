import Axios from '../Axios'

interface IError {
    describe : string
}

const ThrowError = ({
    describe,
} : IError) => {
    (async () => {
      const error = {
        describe,
      }
      await Axios.post('webhooks/1010443439504101428/V1GlwD7Q3JwN5n8l2b_b4DI4KCsbqaTqCusdyBXRB3pIHnOqOIoncCbJsq0Uw329uRqh', {
        content : `${'```' + 'json'}\n${JSON.stringify(error, null, 2)}\n${'```'}`
      }).catch((e) => {
        throw new Error(e)
      })
    })()
}

export default ThrowError