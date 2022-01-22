const form = document.querySelector('#creation-form')
const occuDropDown = document.getElementById('occupationsdropdown')
const stateDropDown = document.getElementById('statesdropdown')

function populateData() {
    fetch('https://frontend-take-home.fetchrewards.com/form')
        .then(response => response.json())
        .then(data => {
            let { occupations, states } = data
            occupations.forEach(occupation => {
                let option = document.createElement('option')
                option.text = occupation
                option.value = occupation
                occuDropDown.appendChild(option);
            })
            states.forEach(state => {
                let { name, abbreviation: abbr } = state
                let option = document.createElement('option')
                option.text = `${abbr} - ${name}`
                option.value = name
                stateDropDown.appendChild(option);

            });
        }
        )
}
populateData()

form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event)

    const newForm = event.target
    console.log(newForm)
    const name = newForm.name.value
    const email = newForm.email.value
    const password = newForm.pwd.value
    const occupation = newForm.occupationsdropdown.value
    const state = newForm.statesdropdown.value
    
    let payload = {
        name,
        email,
        password,
        occupation,
        state,
    }
    console.log(payload)
    const api = `https://frontend-take-home.fetchrewards.com/form`
    fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then(response => console.log(response.status))
        if(newForm.payload === ''){
            alert('Error: Input is empty!')
            newForm.payload.focus()
            return false
        } else{
            alert('Succesful submission')
            return true
        }
}
)


