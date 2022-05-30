
export default function fakeAuth () {
    return new Promise ((resolve) => {
        setTimeout(() => resolve('2342f2f1d131rf12'), 500)
    })
}