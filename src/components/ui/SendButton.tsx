interface Props {
  loading: boolean
}

const SendButton = ({ loading }: Props) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className="bg-background hover:bg-background/70 w-full cursor-pointer rounded-full py-2 transition-colors duration-300"
    >
      {loading ? (
        <>
          <span>Sending...</span>
        </>
      ) : (
        <span className="text-accent">Send Now</span>
      )}
    </button>
  )
}

export default SendButton
