// let bitcoin = require('bitcoinjs-lib')
import types from "./types";

export default [
	{
		id: 0,
		name: "OP_0",
		documentation: "",
		type: types.constants,
		description: "An empty array of bytes is pushed onto the stack. (This is not a no-op: an item is added to the stack.)"
	},
	{
		id: 0,
		name: "OP_FALSE",
		documentation: "",
		type: types.constants,
		description: "An empty array of bytes is pushed onto the stack. (This is not a no-op: an item is added to the stack.)"
	},
	{
		id: 76,
		name: "OP_PUSHDATA1",
		documentation: "",
		type: types.constants,
		description: "The next byte contains the number of bytes to be pushed onto the stack."
	},
	{
		id: 77,
		name: "OP_PUSHDATA2",
		documentation: "",
		type: types.constants,
		description: "The next two bytes contain the number of bytes to be pushed onto the stack in little endian order."
	},
	{
		id: 78,
		name: "OP_PUSHDATA4",
		documentation: "",
		type: types.constants,
		description: "The next four bytes contain the number of bytes to be pushed onto the stack in little endian order."
	},
	{
		id: 79,
		name: "OP_1NEGATE",
		documentation: "",
		type: types.constants,
		description: "The number -1 is pushed onto the stack."
	},
	{
		id: 81,
		name: "OP_1",
		documentation: "",
		type: types.constants,
		description: "The number 1 is pushed onto the stack."
	},
	{
		id: 81,
		name: "OP_TRUE",
		documentation: "",
		type: types.constants,
		description: "The number 1 is pushed onto the stack."
	},
	{
		id: 82,
		name: "OP_2",
		documentation: "",
		type: types.constants,
		description: "The number 2 is pushed onto the stack."
	},
	{
		id: 83,
		name: "OP_3",
		documentation: "",
		type: types.constants,
		description: "The number 3 is pushed onto the stack."
	},
	{
		id: 84,
		name: "OP_4",
		documentation: "",
		type: types.constants,
		description: "The number 4 is pushed onto the stack."
	},
	{
		id: 85,
		name: "OP_5",
		documentation: "",
		type: types.constants,
		description: "The number 5 is pushed onto the stack."
	},
	{
		id: 86,
		name: "OP_6",
		documentation: "",
		type: types.constants,
		description: "The number 6 is pushed onto the stack."
	},
	{
		id: 87,
		name: "OP_7",
		documentation: "",
		type: types.constants,
		description: "The number 7 is pushed onto the stack."
	},
	{
		id: 88,
		name: "OP_8",
		documentation: "",
		type: types.constants,
		description: "The number 8 is pushed onto the stack."
	},
	{
		id: 89,
		name: "OP_9",
		documentation: "",
		type: types.constants,
		description: "The number 9 is pushed onto the stack."
	},
	{
		id: 90,
		name: "OP_10",
		documentation: "",
		type: types.constants,
		description: "The number 10 is pushed onto the stack."
	},
	{
		id: 91,
		name: "OP_11",
		documentation: "",
		type: types.constants,
		description: "The number 11 is pushed onto the stack."
	},
	{
		id: 92,
		name: "OP_12",
		documentation: "",
		type: types.constants,
		description: "The number 12 is pushed onto the stack."
	},
	{
		id: 93,
		name: "OP_13",
		documentation: "",
		type: types.constants,
		description: "The number 13 is pushed onto the stack."
	},
	{
		id: 94,
		name: "OP_14",
		documentation: "",
		type: types.constants,
		description: "The number 14 is pushed onto the stack."
	},
	{
		id: 95,
		name: "OP_15",
		documentation: "",
		type: types.constants,
		description: "The number 15 is pushed onto the stack."
	},
	{
		id: 96,
		name: "OP_16",
		documentation: "",
		type: types.constants,
		description: "The number 16 is pushed onto the stack."
	},






	{
		id: 97,
		name: "OP_NOP",
		description: "Does nothing.",
		type: types.flowControl,
		documentation: ""
	},
	{
		id: 99,
		name: "OP_IF",
		description: "If the top stack value is not False, the statements are executed. The top stack value is removed.",
		type: types.flowControl,
		documentation: "<expression> OP_IF [statements] [OP_ELSE [statements]]* OP_ENDIF"
	},
	{
		id: 100,
		name: "OP_NOTIF",
		description: "If the top stack value is False, the statements are executed. The top stack value is removed.",
		type: types.flowControl,
		documentation: "<expression> OP_NOTIF [statements] [OP_ELSE [statements]]* OP_ENDIF"
	},
	{
		id: 103,
		name: "OP_ELSE",
		description: "If the preceding OP_IF or OP_NOTIF or OP_ELSE was not executed then these statements are and if the preceding OP_IF or OP_NOTIF or OP_ELSE was executed then these statements are not.",
		type: types.flowControl,
		documentation: "<expression> OP_IF [statements] [OP_ELSE [statements]]* OP_ENDIF"
	},
	{
		id: 104,
		name: "OP_ENDIF",
		description: "Ends an if/else block. All blocks must end, or the transaction is invalid. An OP_ENDIF without OP_IF earlier is also invalid.",
		type: types.flowControl,
		documentation: "<expression> OP_IF [statements] [OP_ELSE [statements]]* OP_ENDIF"
	},
	{
		id: 105,
		name: "OP_VERIFY",
		description: "Marks transaction as invalid if top stack value is not true. The top stack value is removed.",
		type: types.flowControl,
		documentation: ""
	},
	{
		id: 106,
		name: "OP_RETURN",
		description: "Marks transaction as invalid. Since bitcoin 0.9, a standard way of attaching extra data to transactions is to add a zero-value output with a scriptPubKey consisting of OP_RETURN followed by data. Such outputs are provably unspendable and specially discarded from storage in the UTXO set, reducing their cost to the network. Since 0.12, standard relay rules allow a single output with OP_RETURN, that contains any sequence of push statements (or OP_RESERVED) after the OP_RETURN provided the total scriptPubKey length is at most 83 bytes.",
		type: types.flowControl,
		documentation: ""
	},





	{
		id: 107,
		name: "OP_TOALTSTACK",
		description: "Puts the input onto the top of the alt stack. Removes it from the main stack.",
		type: types.stack,
		documentation: ""
	},
	{
		id: 108,
		name: "OP_FROMALTSTACK",
		description: "Puts the input onto the top of the main stack. Removes it from the alt stack.",
		type: types.stack,
		documentation: ""
	},
	{
		id: 115,
		name: "OP_IFDUP",
		description: "If the top stack value is not 0, duplicate it.",
		type: types.stack,
		documentation: ""
	},
	{
		id: 116,
		name: "OP_DEPTH",
		description: "Puts the number of stack items onto the stack.",
		type: types.stack,
		documentation: ""
	},
	{
		id: 117,
		name: "OP_DROP",
		description: "Removes the top stack item.",
		type: types.stack,
		documentation: ""
	},
	{
		id: 118,
		name: "OP_DUP",
		description: "Duplicates the top stack item.",
		type: types.stack,
		documentation: ""
	},
	{
		id: 119,
		name: "OP_NIP",
		description: "Removes the second-to-top stack item.",
		type: types.stack,
		documentation: ""
	},
	{
		id: 120,
		name: "OP_OVER",
		description: "Copies the second-to-top stack item to the top.",
		type: types.stack,
		documentation: ""
	},
	{
		id: 121,
		name: "OP_PICK",
		description: "The item n back in the stack is copied to the top.",
		type: types.stack,
		documentation: ""
	},
	{
		id: 122,
		name: "OP_ROLL",
		description: "The item n back in the stack is moved to the top.",
		type: types.stack,
		documentation: ""
	},
	{
		id: 123,
		name: "OP_ROT",
		description: "The top three items on the stack are rotated to the left.",
		type: types.stack,
		documentation: ""
	},
	{
		id: 124,
		name: "OP_SWAP",
		description: "The top two items on the stack are swapped.",
		type: types.stack,
		documentation: ""
	},
	{
		id: 125,
		name: "OP_TUCK",
		description: "The item at the top of the stack is copied and inserted before the second-to-top item.",
		type: types.stack,
		documentation: ""
	},
	{
		id: 109,
		name: "OP_2DROP",
		description: "Removes the top two stack items.",
		type: types.stack,
		documentation: ""
	},
	{
		id: 110,
		name: "OP_2DUP",
		description: "Duplicates the top two stack items.",
		type: types.stack,
		documentation: ""
	},
	{
		id: 111,
		name: "OP_3DUP",
		description: "Duplicates the top three stack items.",
		type: types.stack,
		documentation: ""
	},
	{
		id: 112,
		name: "OP_2OVER",
		description: "Copies the pair of items two spaces back in the stack to the front.",
		type: types.stack,
		documentation: ""
	},
	{
		id: 113,
		name: "OP_2ROT",
		description: "The fifth and sixth items back are moved to the top of the stack.",
		type: types.stack,
		documentation: ""
	},
	{
		id: 114,
		name: "OP_2SWAP",
		description: "Swaps the top two pairs of items.",
		type: types.stack,
		documentation: ""
	},





	{
		id: 126,
		name: "OP_CAT",
		description: "Concatenates two strings.",
		type: types.splice,
		documentation: "",
		deprecated: true
	},
	{
		id: 127,
		name: "OP_SUBSTR",
		description: "Returns a section of a string.",
		type: types.splice,
		documentation: "",
		deprecated: true
	},
	{
		id: 128,
		name: "OP_LEFT",
		description: "Keeps only characters left of the specified point in a string.",
		type: types.splice,
		documentation: "",
		deprecated: true
	},
	{
		id: 129,
		name: "OP_RIGHT",
		description: "Keeps only characters right of the specified point in a string.",
		type: types.splice,
		documentation: "",
		deprecated: true
	},
	{
		id: 130,
		name: "OP_SIZE",
		description: "Pushes the string length of the top element of the stack (without popping it).",
		type: types.splice,
		documentation: "",
		deprecated: false
	},






	{
		id: 131,
		name: "OP_INVERT",
		description: "Flips all of the bits in the input.",
		type: types.bitwiseLogic,
		documentation: "",
		deprecated: true
	},
	{
		id: 132,
		name: "OP_AND",
		description: "Boolean and between each bit in the inputs.",
		type: types.bitwiseLogic,
		documentation: "",
		deprecated: true
	},
	{
		id: 133,
		name: "OP_OR",
		description: "Boolean or between each bit in the inputs.",
		type: types.bitwiseLogic,
		documentation: "",
		deprecated: true
	},
	{
		id: 134,
		name: "OP_XOR",
		description: "Boolean exclusive or between each bit in the inputs.",
		type: types.bitwiseLogic,
		documentation: "",
		deprecated: true
	},
	{
		id: 135,
		name: "OP_EQUAL",
		description: "Returns 1 if the inputs are exactly equal, 0 otherwise.",
		type: types.bitwiseLogic,
		documentation: "",
		deprecated: false
	},
	{
		id: 136,
		name: "OP_EQUALVERIFY",
		description: "Same as OP_EQUAL, but runs OP_VERIFY afterward.",
		type: types.bitwiseLogic,
		documentation: "",
		deprecated: false
	},








	{
		id: 139,
		name: "OP_1ADD",
		description: "1 is added to the input.",
		type: types.arithmetic,
		documentation: "",
		deprecated: false
	},
	{
		id: 140,
		name: "OP_1SUB",
		description: "1 is subtracted from the input.",
		type: types.arithmetic,
		documentation: "",
		deprecated: false
	},
	{
		id: 141,
		name: "OP_2MUL",
		description: "The input is multiplied by 2.",
		type: types.arithmetic,
		documentation: "",
		deprecated: true
	},
	{
		id: 142,
		name: "OP_2DIV",
		description: "The input is divided by 2.",
		type: types.arithmetic,
		documentation: "",
		deprecated: true
	},
	{
		id: 143,
		name: "OP_NEGATE",
		description: "The sign of the input is flipped.",
		type: types.arithmetic,
		documentation: "",
		deprecated: false
	},
	{
		id: 144,
		name: "OP_ABS",
		description: "The input is made positive.",
		type: types.arithmetic,
		documentation: "",
		deprecated: false
	},
	{
		id: 145,
		name: "OP_NOT",
		description: "If the input is 0 or 1, it is flipped. Otherwise the output will be 0.",
		type: types.arithmetic,
		documentation: "",
		deprecated: false
	},
	{
		id: 146,
		name: "OP_0NOTEQUAL",
		description: "Returns 0 if the input is 0. 1 otherwise.",
		type: types.arithmetic,
		documentation: "",
		deprecated: false
	},
	{
		id: 147,
		name: "OP_ADD",
		description: "a is added to b.",
		type: types.arithmetic,
		documentation: "",
		deprecated: false
	},
	{
		id: 148,
		name: "OP_SUB",
		description: "b is subtracted from a.",
		type: types.arithmetic,
		documentation: "",
		deprecated: false
	},
	{
		id: 149,
		name: "OP_MUL",
		description: "a is multiplied by b.",
		type: types.arithmetic,
		documentation: "",
		deprecated: true
	},
	{
		id: 150,
		name: "OP_DIV",
		description: "a is divided by b.",
		type: types.arithmetic,
		documentation: "",
		deprecated: true
	},
	{
		id: 151,
		name: "OP_MOD",
		description: "Returns the remainder after dividing a by b.",
		type: types.arithmetic,
		documentation: "",
		deprecated: true
	},
	{
		id: 152,
		name: "OP_LSHIFT",
		description: "Shifts a left b bits, preserving sign.",
		type: types.arithmetic,
		documentation: "",
		deprecated: true
	},
	{
		id: 153,
		name: "OP_RSHIFT",
		description: "Shifts a right b bits, preserving sign.",
		type: types.arithmetic,
		documentation: "",
		deprecated: true
	},
	{
		id: 154,
		name: "OP_BOOLAND",
		description: "If both a and b are not 0, the output is 1. Otherwise 0.",
		type: types.arithmetic,
		documentation: "",
		deprecated: false
	},
	{
		id: 155,
		name: "OP_BOOLOR",
		description: "If a or b is not 0, the output is 1. Otherwise 0.",
		type: types.arithmetic,
		documentation: "",
		deprecated: false
	},
	{
		id: 156,
		name: "OP_NUMEQUAL",
		description: "Returns 1 if the numbers are equal, 0 otherwise.",
		type: types.arithmetic,
		documentation: "",
		deprecated: false
	},
	{
		id: 157,
		name: "OP_NUMEQUALVERIFY",
		description: "Same as OP_NUMEQUAL, but runs OP_VERIFY afterward.",
		type: types.arithmetic,
		documentation: "",
		deprecated: false
	},
	{
		id: 158,
		name: "OP_NUMNOTEQUAL",
		description: "Returns 1 if the numbers are not equal, 0 otherwise.",
		type: types.arithmetic,
		documentation: "",
		deprecated: false
	},
	{
		id: 159,
		name: "OP_LESSTHAN",
		description: "Returns 1 if a is less than b, 0 otherwise.",
		type: types.arithmetic,
		documentation: "",
		deprecated: false
	},
	{
		id: 160,
		name: "OP_GREATERTHAN",
		description: "Returns 1 if a is greater than b, 0 otherwise.",
		type: types.arithmetic,
		documentation: "",
		deprecated: false
	},
	{
		id: 161,
		name: "OP_LESSTHANOREQUAL",
		description: "Returns 1 if a is less than or equal to b, 0 otherwise.",
		type: types.arithmetic,
		documentation: "",
		deprecated: false
	},
	{
		id: 162,
		name: "OP_GREATERTHANOREQUAL",
		description: "Returns 1 if a is greater than or equal to b, 0 otherwise.",
		type: types.arithmetic,
		documentation: "",
		deprecated: false
	},
	{
		id: 163,
		name: "OP_MIN",
		description: "Returns the smaller of a and b.",
		type: types.arithmetic,
		documentation: "",
		deprecated: false
	},
	{
		id: 164,
		name: "OP_MAX",
		description: "Returns the larger of a and b.",
		type: types.arithmetic,
		documentation: "",
		deprecated: false
	},
	{
		id: 165,
		name: "OP_WITHIN",
		description: "Returns 1 if x is within the specified range (left-inclusive), 0 otherwise.",
		type: types.arithmetic,
		documentation: "",
		deprecated: false
	},


	


	{
		id: 166,
		name: "OP_RIPEMD160",
		description: "The input is hashed using RIPEMD-160.",
		type: types.crypto,
		documentation: "",
		deprecated: false
	},
	{
		id: 167,
		name: "OP_SHA1",
		description: "The input is hashed using SHA-1.",
		type: types.crypto,
		documentation: "",
		deprecated: false
	},
	{
		id: 168,
		name: "OP_SHA256",
		description: "The input is hashed using SHA-256.",
		type: types.crypto,
		documentation: "",
		deprecated: false
	},
	{
		id: 169,
		name: "OP_HASH160",
		description: "The input is hashed twice: first with SHA-256 and then with RIPEMD-160.",
		type: types.crypto,
		documentation: "",
		deprecated: false
	},
	{
		id: 170,
		name: "OP_HASH256",
		description: "The input is hashed two times with SHA-256.",
		type: types.crypto,
		documentation: "",
		deprecated: false
	},
	{
		id: 171,
		name: "OP_CODESEPARATOR",
		description: "All of the signature checking words will only match signatures to the data after the most recently-executed OP_CODESEPARATOR.",
		type: types.crypto,
		documentation: "",
		deprecated: false
	},
	{
		id: 172,
		name: "OP_CHECKSIG",
		description: "The entire transaction's outputs, inputs, and script (from the most recently-executed OP_CODESEPARATOR to the end) are hashed. The signature used by OP_CHECKSIG must be a valid signature for this hash and public key. If it is, 1 is returned, 0 otherwise.",
		type: types.crypto,
		documentation: "",
		deprecated: false
	},
	{
		id: 173,
		name: "OP_CHECKSIGVERIFY",
		description: "Same as OP_CHECKSIG, but OP_VERIFY is executed afterward.",
		type: types.crypto,
		documentation: "",
		deprecated: false
	},
	{
		id: 174,
		name: "OP_CHECKMULTISIG",
		description: "Compares the first signature against each public key until it finds an ECDSA match. Starting with the subsequent public key, it compares the second signature against each remaining public key until it finds an ECDSA match. The process is repeated until all signatures have been checked or not enough public keys remain to produce a successful result. All signatures need to match a public key. Because public keys are not checked again if they fail any signature comparison, signatures must be placed in the scriptSig using the same order as their corresponding public keys were placed in the scriptPubKey or redeemScript. If all signatures are valid, 1 is returned, 0 otherwise. Due to a bug, one extra unused value is removed from the stack. ",
		type: types.crypto,
		documentation: "",
		deprecated: false
	},
	{
		id: 173,
		name: "OP_CHECKMULTISIGVERIFY",
		description: "Same as OP_CHECKMULTISIG, but OP_VERIFY is executed afterward.",
		type: types.crypto,
		documentation: "",
		deprecated: false
	},






	{
		id: 177,
		name: "OP_CHECKLOCKTIMEVERIFY",
		description: "Marks transaction as invalid if the top stack item is greater than the transaction's nLockTime field, otherwise script evaluation continues as though an OP_NOP was executed. Transaction is also invalid if 1. the stack is empty; or 2. the top stack item is negative; or 3. the top stack item is greater than or equal to 500000000 while the transaction's nLockTime field is less than 500000000, or vice versa; or 4. the input's nSequence field is equal to 0xffffffff. The precise semantics are described in BIP 0065.",
		type: types.locktime,
		documentation: "",
		deprecated: false
	},
	{
		id: 178,
		name: "OP_CHECKSEQUENCEVERIFY",
		description: "Marks transaction as invalid if the relative lock time of the input (enforced by BIP 0068 with nSequence) is not equal to or longer than the value of the top stack item. The precise semantics are described in BIP 0112.",
		type: types.locktime,
		documentation: "",
		deprecated: false
	},






	{
		id: 253,
		name: "OP_PUBKEYHASH",
		description: "Represents a public key hashed with OP_HASH160.",
		type: types.pseudoWord,
		documentation: "",
		deprecated: false
	},
	{
		id: 254,
		name: "OP_PUBKEY",
		description: "Represents a public key compatible with OP_CHECKSIG.",
		type: types.pseudoWord,
		documentation: "",
		deprecated: false
	},
	{
		id: 255,
		name: "OP_INVALIDOPCODE",
		description: "Matches any opcode that is not yet assigned.",
		type: types.pseudoWord,
		documentation: "",
		deprecated: false
	},





	{
		id: 80,
		name: "OP_RESERVED",
		description: "Transaction is invalid unless occuring in an unexecuted OP_IF branch.",
		type: types.reservedWord,
		documentation: "",
		deprecated: false
	},
	{
		id: 98,
		name: "OP_VER",
		description: "Transaction is invalid unless occuring in an unexecuted OP_IF branch.",
		type: types.reservedWord,
		documentation: "",
		deprecated: false
	},
	{
		id: 101,
		name: "OP_VERIF",
		description: "Transaction is invalid even when occuring in an unexecuted OP_IF branch.",
		type: types.reservedWord,
		documentation: "",
		deprecated: false
	},
	{
		id: 102,
		name: "OP_VERNOTIF",
		description: "Transaction is invalid even when occuring in an unexecuted OP_IF branch.",
		type: types.reservedWord,
		documentation: "",
		deprecated: false
	},
	{
		id: 137,
		name: "OP_RESERVED1",
		description: "Transaction is invalid unless occuring in an unexecuted OP_IF branch.",
		type: types.reservedWord,
		documentation: "",
		deprecated: false
	},
	{
		id: 138,
		name: "OP_RESERVED2",
		description: "Transaction is invalid unless occuring in an unexecuted OP_IF branch.",
		type: types.reservedWord,
		documentation: "",
		deprecated: false
	},
	{
		id: 176,
		name: "OP_NOP1",
		description: "The word is ignored. Does not mark transaction as invalid.",
		type: types.reservedWord,
		documentation: "",
		deprecated: false
	},
	{
		id: 179,
		name: "OP_NOP4",
		description: "The word is ignored. Does not mark transaction as invalid.",
		type: types.reservedWord,
		documentation: "",
		deprecated: false
	},
	{
		id: 180,
		name: "OP_NOP5",
		description: "The word is ignored. Does not mark transaction as invalid.",
		type: types.reservedWord,
		documentation: "",
		deprecated: false
	},
	{
		id: 181,
		name: "OP_NOP6",
		description: "The word is ignored. Does not mark transaction as invalid.",
		type: types.reservedWord,
		documentation: "",
		deprecated: false
	},
	{
		id: 182,
		name: "OP_NOP7",
		description: "The word is ignored. Does not mark transaction as invalid.",
		type: types.reservedWord,
		documentation: "",
		deprecated: false
	},
	{
		id: 183,
		name: "OP_NOP8",
		description: "The word is ignored. Does not mark transaction as invalid.",
		type: types.reservedWord,
		documentation: "",
		deprecated: false
	},
	{
		id: 184,
		name: "OP_NOP9",
		description: "The word is ignored. Does not mark transaction as invalid.",
		type: types.reservedWord,
		documentation: "",
		deprecated: false
	},
	{
		id: 185,
		name: "OP_NOP10",
		description: "The word is ignored. Does not mark transaction as invalid.",
		type: types.reservedWord,
		documentation: "",
		deprecated: false
	},
]