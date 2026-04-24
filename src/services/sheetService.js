export const saveToSheet = async (formElement) => {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyNQXiT6zth0m6saF42azGJ_VSjlPa8rP4vthpSLu6B3oSBHzK7YgtHCRQHGUeU5qJi/exec'

  const formData = new FormData(formElement)
  const data = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    ReasonForVisit: formData.get('ReasonForVisit'),
    message: formData.get('message'),
  }
  console.log('Submitting to Sheet:', data)

  const response = await fetch(scriptURL, {
    method: 'POST',
    body: formData
  })

  if (!response.ok) {
    throw new Error('Google Sheet update failed')
  }
}